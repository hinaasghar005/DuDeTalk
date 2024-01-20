import axios from 'axios';
import {PAT, clarifAI_BaseURL} from '../../utils/constants';

export function dall_e(text) {
  return new Promise(async (resolve, reject) => {
    const userID = 'openai';
    const appId = 'dall-e';
    const modelId = 'dall-e-3';
    const modelVersionId = 'dc9dcb6ee67543cebc0b9a025861b868';

    const url = `${clarifAI_BaseURL}users/${userID}/apps/${appId}/models/${modelId}/versions/${modelVersionId}/outputs`;
    const requestData = {
      inputs: [
        {
          data: {
            text: {
              raw: text,
            },
          },
        },
      ],
    };

    const headers = {
      Authorization: `Key ${PAT}`,
      'Content-Type': 'application/json',
    };

    await axios
      .post(url, requestData, {
        headers,
        onUploadProgress: progressEvent => {
          const percent = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100,
          );
          console.log('🚀 ~ returnnewPromise ~ percent:', percent);
        },
      })
      .then(response => {
        resolve({
          result: response.data?.outputs[0],
          message: 'Image generated successfully',
        });
      })
      .catch(err => {
        reject({result: err, message: 'Image generation failed'});
      });
  });
}

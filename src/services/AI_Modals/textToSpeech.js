import axios from 'axios';
import {PAT, clarifAI_BaseURL} from '../../utils/constants';

export function textToSpeech(text) {
  return new Promise(async (resolve, reject) => {
    const userID = 'openai';
    const appId = 'tts';
    const modelId = 'openai-tts-1';
    const modelVersionId = 'fff6ce1fd487457da95b79241ac6f02d';

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
      .post(url, requestData, {headers})
      .then(response => {
        resolve({
          result: response.data?.outputs[0],
          message: 'Audio generated successfully',
        });
      })
      .catch(err => {
        reject({result: err, message: 'Audio generation failed'});
      });
  });
}

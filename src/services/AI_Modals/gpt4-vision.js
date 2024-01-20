import axios from 'axios';
import {PAT, clarifAI_BaseURL} from '../../utils/constants';

export function gpt4_vision({image, prompt}) {
  return new Promise(async (resolve, reject) => {
    const userID = 'openai';
    const appId = 'chat-completion';
    const modelId = 'openai-gpt-4-vision';
    const modelVersionId = '266df29bc09843e0aee9b7bf723c03c2';
    const url = `${clarifAI_BaseURL}models/${modelId}/versions/${modelVersionId}/outputs`;
    const requestData = {
      user_app_id: {
        user_id: userID,
        app_id: appId,
      },
      inputs: [
        {
          data: {
            image: {
              base64: image, //'https://images.all-free-download.com/images/graphiclarge/iphone_6_sample_photo_566464.jpg',
            },
            text: {
              raw: prompt,
              // url: TEXT_URL, allow_duplicate_url: true
              // raw: fileBytes
            },
          },
        },
      ],
      // model: {
      //   model_version: {
      //     output_info: {
      //       params: {
      //         temperature: 0.5,
      //         max_tokens: 10,
      //         top_p: 0.95,
      //       },
      //     },
      //   },
      // },
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
          message: 'Text generated successfully',
        });
      })
      .catch(err => {
        reject({result: err, message: 'Text generation failed'});
      });
  });
}

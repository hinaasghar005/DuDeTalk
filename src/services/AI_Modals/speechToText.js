import axios from 'axios';
import {PAT, clarifAI_BaseURL} from '../../utils/constants';

export function speechToText(audio) {
  return new Promise(async (resolve, reject) => {
    const url = `${clarifAI_BaseURL}users/facebook/apps/asr/models/asr-wav2vec2-base-960h-english/versions/f4deae70a473492a8e2f9b7bb1dbee85/outputs`;
    const requestData = {
      inputs: [
        {
          data: {
            audio: {
              base64: audio,
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
        // console.log(
        //   '🚀 ~ returnnewPromise ~ response:',
        //   JSON.stringify(response.data.outputs[0]),
        // );
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

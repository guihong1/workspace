import { OpenAI } from "openai";
import dotenv from 'dotenv'

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.302.ai/v1'
})


// 主函数  执行的入口，单点,箭头函数
// 使用了await 就要用async  异步
const main =async () => {
    // openai  的调用是异步的
    // await 等会
    const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { 
                role: 'user', 
                content:[
                {
                    type: 'text',
                   'text': '请描述以下图片的内容'
                },
                {
                    type: 'image_url',
                    "image_url": {
                        "url": "https://n.sinaimg.cn/sinakd20121/756/w2000h3556/20200924/f24d-izrvxmf4319364.jpg"
                    }
                }
            ] 
            },
           
        ],
        max_tokens: 300
    });
    console.log(response.choices[0].message.content);
}

main()
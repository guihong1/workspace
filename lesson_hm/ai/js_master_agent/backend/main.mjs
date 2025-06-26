import OpenAI from "openai";


const client=new OpenAI({
    apiKey:"",
    baseURL:"https://api.302.ai/v1"
})


async function main() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",  //此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "你是谁？" }
        ],
    });
    console.log(JSON.stringify(completion))
}
<<<<<<< HEAD

main();
=======
main()
>>>>>>> cbc98cc025bb4bec1de14aa2945f1edbe03d8280

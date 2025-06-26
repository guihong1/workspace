import OpenAI from "openai";
import dotenv from "dotenv";

//启动一个进程 process
//env 对象 环境对象
dotenv.config()

const client = new OpenAI({
    // node 里的进程对象
    apiKey:process.env.OPENAI_API_KEY,
    baseURL:process.env.OPENAI_BASE_URL
})

// es6 默认参数值
//通用的LLM 完成接口函数， 复用

//以用户的角度去进行聊天
const getCompletion = async (prompt,model="gpt-3.5-turbo") =>{
    const messages=[{
        role:'user',
        content:prompt
    }];
    const response=await client.chat.completions.create({
    model:model,
    messages:messages,
    temperature:0.1  // LLM 生成内容的随机性
})
    return response.choices[0].message.content
}

const main= async ()=>{

        const user_messages=[
        // 英语
        "What is the best way to learn a new language?",
        // 法语
        "Quelle est la meilleure façon d'apprendre une nouvelle langue?",
        // 西班牙语
        "¿Cuál es la mejor manera de aprender un nuevo idioma?",
        // 德语
        "Was ist die beste Möglichkeit, eine neue Sprache zu lernen?",
        // 日语
        "新しい言語を学ぶ最良の方法は何ですか？"
    ]
    for(let issue of user_messages)
    {
        
    }
}

main()
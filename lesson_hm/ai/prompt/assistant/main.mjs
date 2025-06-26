import dotenv from 'dotenv'
import  OpenAI  from 'openai'


// .env 本项目 环境变量配置文件
dotenv.config()
// 全面es6
const { OPENAI_API_KEY,OPENAI_API_BASE_URL } = process.env

// 实例化openai对象
const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: OPENAI_API_BASE_URL
})

// get_completion 函数封装
const get_completion = async(prompt,model= 'gpt-3.5-turbo') =>{
    const messages = [
        {role : 'user',content: prompt}
    ]

    // 调用 OpenAI 的聊天完成接口，异步获取聊天回复
    // 传入模型名称、消息列表和温度参数（温度参数控制输出的随机性，0 表示最确定的输出）
    const response = await client.chat.completions.create({
        model, // 使用的 OpenAI 模型，默认值为 'gpt-3.5-turbo'
        messages, // 包含用户消息的数组，格式为 {role: 'user', content: prompt}
        temperature: 0, // 控制输出随机性的参数，0 表示输出结果最稳定、最可预测
    })
    // 从响应结果中提取第一条回复的消息内容并返回
    return response.choices[0].message.content
    }

 const main =async () =>{
    // nlp 情感分析
  const sentiment = "negative"
  const review = `
  因此，他们仍然以 70-10 左右的价格在季节性销售，价格也比之前的 29 美元低。
  所以它看起来还不错，但如果你看看底座，刀片锁定到位的部分看起来不如几年前的版本那么好，但我打算非常温柔地使用它（例如，我先在搅拌机中粉碎非常硬的物品，如豆子、冰、米饭等。然后在搅拌机中将它们粉碎成我想要的份量，然后切换到搅拌刀片以获得更细的面粉，并在制作冰沙时先使用十字切割刀片，然后如果我需要它们更细/更少的浆状，则使用平刀片）。制作冰沙的特别提示：将水果和蔬菜切碎并冷冻（如果使用菠菜，请稍微炖一下，然后冷冻直至可以使用；如果制作冰糕，请使用小型或中型食品加工机），这样就可以避免在制作冰沙时添加太多冰块。
  大约一年后，电机发出奇怪的声音。
  我打电话给客服，但保修期已过，所以我不得不再买一个。仅供参考：这类产品的整体质量已经下降，因此他们有点指望品牌认知度和消费者忠诚度来维持销售。大约两天后就收到了。
  `
//   const prompt = `
//     你是一名客服AI助理。
//     你的任务是向尊贵的客户发送电子邮件回复。
//     给定以'''分隔的评论的客户发送电子邮件，
//     生成回复以感谢客户的评论。
//     如果情绪是正面或中性的，感谢他们的评论。
//     如果情绪是负面的，道歉并建议他们可以联系客服。
//     确保使用评论中的具体细节。
//     用简洁专业的语气写作。
//     在电子邮件中签名为“AI客户代理”
//     客户评论: '''${review}'''
//     评论情绪: ${sentiment}
  
//   `
//   const response =await get_completion(prompt)
//     console.log(response)
const lamp_review = `
  需要一盏漂亮的灯放在我的卧室，这盏灯有额外的存储空间，而且价格也不太高。 
  很快就收到了。我们灯的灯串在运输过程中断了，公司很乐意给我们寄来一根新的。
  几天之内就到了。组装起来很容易。
  我缺少一个零件，所以我联系了他们的支持人员，他们很快就给我找到了缺失的零件！ 
  在我看来，Lumina 是一家关心客户和产品的好公司！！
  `

  const prompt = `
  以下产品评论的情绪是什么，
  以三个反引号分隔
  确定以下评论作者表达的感情列表。
  列表中最多包含5项。将你的答案格式化为逗号分隔的单词列表。
  请用一个词来回答，可以是“积极” 或者“消极”或者“中性”。
  评论内容：'''${lamp_review}'''
  `

  const response =await get_completion(prompt);
  console.log(response)
  
 }
 main()


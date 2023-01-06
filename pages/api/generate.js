import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const userInputChallengeOrQuestion = req.body.userInput;
  const completePrompt = `
What are the top 3 essays written by Paul Graham that you would recommend for addressing the following problem/question: "${userInputChallengeOrQuestion}". Only include highly relevant essays. If the essay is not relevant to the question/problem posed, don't include it. Include the essays from order of most relevant to least relevant.
Provide the url for each of the articles too. 
Write out the response in the following format:
From <author name>:
1. <name of first resource recommended>
URL: <url of the resource>
Summary (at least 150 words):

2. <name of second resource recommended>
URL: <url of the resource>
Summary (at least 150 words): 

3. <name of second resource recommended>
URL: <url of the resource>
Summary (at least 150 words): 

The "Summary" section in the format provided above should be writting in the style of Paul Graham and address the following problem/question: "${userInputChallengeOrQuestion}". Also, get straight to the point in the "Summary" section and remove any fluff in the writing. Maximize the value per word written. If the resource is a book, provide a refence to the location in the book where further reading can be done to learn more about how to address the following question/problem: "${userInputChallengeOrQuestion}"`;
  // Run first prompt
  console.log(`API: ${completePrompt}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${completePrompt}`,
    temperature: 0.2,
    max_tokens: 600,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

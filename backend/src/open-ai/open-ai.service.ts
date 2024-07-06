import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from "openai";



@Injectable()
export class OpenAiService {
    private configuration: Configuration;
    private openAi: OpenAIApi;

    constructor(configService: ConfigService) {
        this.configuration = new Configuration({
            apiKey: configService.get('OPENAI_API_KEY'),
        });
        this.openAi = new OpenAIApi(this.configuration);
    }

    public async generateCoverLetter(resume: string, jobDescription: string) {
        const prompt = `Considering my resume: "${resume}", write me a cover letter for the following job description: "${jobDescription}".`;

        const completion = await this.openAi.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.6,
            max_tokens: 100,
        });

        return completion.data.choices[0].text;
    }
}

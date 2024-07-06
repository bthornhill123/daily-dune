import { Controller, Get } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';

@Controller('open-ai')
export class OpenAiController {
    constructor(private openAiService: OpenAiService) {
    }

    @Get('cover-letter')
    async generateCoverLetter(resume: string, jobDescription: string) {
        const coverLetter = await this.openAiService.generateCoverLetter(resume, jobDescription);

        return { coverLetter };
    }
}

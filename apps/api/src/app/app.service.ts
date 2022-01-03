import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api! To continue this tutorial go to https://dev.to/beeman/add-a-nestjs-api-to-a-nx-workspace-24f' };
  }
}

import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // TODO: DB 연동 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }
  async verifyEmail(signupVerifyToken: string) {
    console.log(signupVerifyToken);
    return signupVerifyToken;
  }
//   async getUserInfo(userId: string): Promise<UserInfo> {
//     // 1. userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
//     // 2. 조회된 데이터를 UserInfo 타입으로 응답

//     throw new Error('Method not implemented.');
//   }
}

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from './guser.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly buserService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey', // Ideally, this should come from a configuration/environment variable
    });
  }

  async validate(payload: any) {
    // Here you would customize the validation logic. For instance:
    const user = await this.buserService.findOneByEmail(payload.email);
    if (!user) {
      throw new Error('User not found');
    }
    return user; // Or a subset of user properties you want to include in the user object in requests
  }
}

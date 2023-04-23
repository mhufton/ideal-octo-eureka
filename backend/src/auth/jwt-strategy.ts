import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: `${process.env.JWT_SECRET}`,
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findUserById(payload.sub);
    // then spread the user object into the return object
    return { ...user, id: payload.sub, username: payload.username };
  }
}

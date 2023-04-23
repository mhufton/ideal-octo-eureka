import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { LocalAuthGaurd } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(@Req() req): Promise<any> {
    return req.user;
  }

  @UseGuards(LocalAuthGaurd)
  @Get('currentUser')
  async currentUser(@Req() req): Promise<any> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req): string {
    return req.user;
  }
}

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidateIdGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const id = Number(request.params.id);

    if ((id >= 1 && id <= 1025) || (id >= 10001 && id <= 10277)) {
      return true;
    } else {
      throw new BadRequestException(
        'Pokemon ID must be a number beetween 1 and 1025 or between 10001 and 10277',
      );
    }
  }
}

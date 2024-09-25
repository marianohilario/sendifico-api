import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ValidateIdGuard } from './guards/validateId.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/pokemon')
  getPokemons() {
    return this.appService.getPokemons();
  }

  @Get('/api/pokemon/:id')
  @UseGuards(ValidateIdGuard)
  getPokemonById(@Param('id') id: string) {
    return this.appService.getPokemonById(id);
  }

  @Get('/api/pokemonAndTypes/:id')
  @UseGuards(ValidateIdGuard)
  getPokemonAndTypesById(@Param('id') id: string) {
    return this.appService.getPokemonAndTypesById(id);
  }
}

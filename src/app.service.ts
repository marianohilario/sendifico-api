import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import axios, { HttpStatusCode } from 'axios';
import { STATUS_CODES } from 'http';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Sendifico-API!';
  }

  async getPokemons() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
      const response = await axios.get(url);
      return {
        results: response.data.results,
      };
    } catch (error) {
      throw new ServiceUnavailableException(
        'Pokemon API is currently unavailable',
      );
    }
  }

  async getPokemonById(id: string) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const response = await axios.get(url);

      return {
        name: response.data.name,
        types: response.data.types,
      };
    } catch (error) {
      throw new BadRequestException('Pokemon not found');
    }
  }

  async getPokemonAndTypesById(id: string) {
    try {
      const pokemonData = await this.getPokemonById(id);
      const types = pokemonData.types;
      const typesInfo = [];

      for (const type of types) {
        const typeResponse = await axios.get(type.type.url);
        const typeData = typeResponse.data;

        const typeInfo = {
          slot: type.slot,
          type: {
            name: typeData.name,
            url: type.type.url,
            names: typeData.names.filter(
              (name) =>
                name.language.name === 'es' || name.language.name === 'ja',
            ),
          },
        };

        typesInfo.push(typeInfo);
      }

      return {
        name: pokemonData.name,
        types: typesInfo,
      };
    } catch (error) {
      throw new BadRequestException('Pokemon not found');
    }
  }
}

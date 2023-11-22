import { IsNotEmpty, IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsBoolean()
  stillEmployee: boolean;
}

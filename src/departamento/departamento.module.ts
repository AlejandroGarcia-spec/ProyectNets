import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { Departamento } from './entities/departamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
  imports: [TypeOrmModule.forFeature([Departamento])],
})
export class DepartamentoModule {}

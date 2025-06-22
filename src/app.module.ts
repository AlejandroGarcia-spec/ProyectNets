import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoModule } from './departamento/departamento.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [EmployeesModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database:'employees_db',
    autoLoadEntities: true,
    synchronize: true, // Note: set to false in production
  }), DepartamentoModule, PositionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

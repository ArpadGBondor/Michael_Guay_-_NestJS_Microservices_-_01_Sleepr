import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@app/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserDocument, UserSchema } from './models/users.schema';

@Module({
  imports: [
    DatabaseModule, // This import sets the MongoDB connection string
    DatabaseModule.forFeature([
      // this import makes sure that mongoose knows the Schema
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}

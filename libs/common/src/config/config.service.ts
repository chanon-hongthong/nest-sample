import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getAppName() {
    return this.getValue('APP_NAME', true);
  }

  public getAppDescription() {
    return this.getValue('APP_DESCRIPTION', true);
  }

  public getAppVersion() {
    return this.getValue('APP_VERSION', true);
  }

  public getAppListenPort() {
    return this.getValue('APP_LISTEN_PORT', true);
  }

  // public getPort() {
  //   return this.getValue('PORT', true);
  // }

  public isProduction() {
    const mode = this.getValue('APP_MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.getValue('MYSQL_HOST'),
      port: parseInt(this.getValue('MYSQL_PORT')),
      username: this.getValue('MYSQL_USER'),
      password: this.getValue('MYSQL_PASSWORD'),
      database: this.getValue('MYSQL_DB'),

      autoLoadEntities: true,
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],

      synchronize: false,
      // ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'APP_VERSION',
  'MYSQL_HOST',
  'MYSQL_PORT',
  'MYSQL_USER',
  'MYSQL_PASSWORD',
  'MYSQL_DB',
]);

export { configService };

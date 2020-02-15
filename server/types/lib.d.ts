
/// <reference types="node" />
/// <reference types="express" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
        readonly GOOGLE_ID: string;
        readonly GOOGLE_CALLBACK: string;
        readonly GOOGLE_SECRET: string;

        readonly PORT: string;
        readonly SERVER_DB_USER: string;
        readonly SERVER_DB_PASSWORD: string;
        readonly SERVER_DB_NAME: string;
        readonly SERVER_DB_HOST: string;
        readonly SERVER_DB_PORT: string;
        readonly SERVER_DIALET: "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined;
    }
  }

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            NODE_ENV: 'development' | 'Production';
            PORT?: string;
            DATABASE_URI:string;
            SECRET_ACCESS_TOKEN:string;
            SECRET_REFRESH_TOKEN:string;
        }
    }
}
export{}
declare global {
  namespace NodeJS {
    /**
     * .env type definitions
     * @link https://stackoverflow.com/questions/45194598/using-process-env-in-typescript
     */
    interface ProcessEnv {
      APP_URL: string;
      APP_USERNAME: string;
      APP_PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

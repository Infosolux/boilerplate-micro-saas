# Boilerplate Micro SaaS

Para iniciar, sigas os passos:

## Defina as variáveis de ambiente:

```sh
DATABASE_URL=""
KEYDB_URL=""

# NEXT-AUTH
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000/"

# NEXT-AUTH com github
GITHUB_ID=""
GITHUB_SECRET=""

# NEXT-AUTH com o Google
GOOGLE_ID=""
GOOGLE_SECRET=""

# NEXT-AUTH com magic-link
EMAIL_SERVER=""
EMAIL_FROM=""

# Integração com a stripe
STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""

## Plano free, setado automaticamente ao cliente criar a conta
STRIPE_FREE_PLAN=""

# Minio para armazenamento de arquivos
MINIO_USE="false"
MINIO_ENDPOINT=""
MINIO_PORT=""
MINIO_ACCESS_KEY=""
MINIO_SECRET_KEY=""
MINIO_USE_SSL=""
```

## Dependências:

### Para subir as dependências
```sh
npm run deps:up
```

### Para parar:
```sh
npm run deps:down
```

### Executar as migrations do banco

```sh
npx prisma generate
```
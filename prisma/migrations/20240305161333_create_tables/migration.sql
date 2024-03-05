-- CreateTable
CREATE TABLE "assistants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "netWork" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "assistants_id_key" ON "assistants"("id");

-- CreateIndex
CREATE UNIQUE INDEX "assistants_email_key" ON "assistants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_id_key" ON "clients"("id");

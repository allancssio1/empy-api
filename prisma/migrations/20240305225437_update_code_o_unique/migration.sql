/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "clients_code_key" ON "clients"("code");

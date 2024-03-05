/*
  Warnings:

  - Made the column `netWork` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "netWork" SET NOT NULL;

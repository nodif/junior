-- CreateEnum
CREATE TYPE "Type" AS ENUM ('GORCA', 'SLADJA', 'MRKA');

-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coffee_name_key" ON "Coffee"("name");

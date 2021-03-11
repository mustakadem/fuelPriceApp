-- CreateTable
CREATE TABLE "DisabledToken" (
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("token")
);

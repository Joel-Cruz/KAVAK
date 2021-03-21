BEGIN TRANSACTION;
GO

ALTER TABLE [Cars] ADD [City] nvarchar(max) NOT NULL DEFAULT N'';
GO

ALTER TABLE [Cars] ADD [Price] decimal(18,2) NOT NULL DEFAULT 0.0;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20210312014948_PrecioYCiudad', N'5.0.4');
GO

COMMIT;
GO


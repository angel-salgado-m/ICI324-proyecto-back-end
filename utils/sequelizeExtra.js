function confExtra(sequelize) {
	const { Cliente, Direccion, Imagen, Medidor, Registro, Sector, Trabajador } = sequelize.models;

	Sector.hasMany(Direccion);
	Direccion.belongsTo(Sector);

	Cliente.hasOne(Direccion);
	Direccion.belongsTo(Cliente);

	Medidor.hasOne(Cliente);
	Cliente.belongsTo(Medidor);

	Direccion.hasMany(Registro);
	Registro.belongsTo(Direccion);

	Registro.hasOne(Imagen);
	Imagen.belongsTo(Registro);

	Sector.hasMany(Trabajador);
	Trabajador.belongsTo(Sector);

}

export default confExtra;

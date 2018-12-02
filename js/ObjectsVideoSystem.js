"use strict"

/* Objeto Person*/
function Person(name,lastname1,lastname2,born,picture){
	//Comprobamos si la funcion se invoca con el operador new
	if (!(this instanceof Person))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	name = typeof name !== 'undefined' ? name : "";
	if (name === "") throw new EmptyValueException("name");
	lastname1 = typeof lastname1 !== 'undefined' ? lastname1 : "";
	if (lastname1 === "") throw new EmptyValueException("lastname1");
	lastname2 = typeof lastname2 !== 'undefined' ? lastname2 : "";
	born = typeof born !== 'undefined' ? born : "";
	if (born === "") throw new EmptyValueException("born");
	picture = typeof picture !== 'undefined' ? picture : "";

    //Atributos privados del objeto
    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = lastname2;
    var _born = born;
    var _picture = picture;

    //Propiedades de acceso a los atributos privados
    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name = value;
		}		
    });
    
    Object.defineProperty(this, 'lastname1', {
		get:function(){
			return _lastname1;
		},
		set:function(value){
			_lastname1 = value;
		}		
    });
    
    Object.defineProperty(this, 'lastname2', {
		get:function(){
			return _lastname2;
		},
		set:function(value){
			_lastname2 = value;
		}		
    });
    
    Object.defineProperty(this, 'born', {
		get:function(){
			return _born;
		},
		set:function(value){
			_born = value;
		}		
    });

    Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			_picture = value;
		}		
	});
}

Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function(){
    return "Nombre: " + this.name + " 1er Apellido: " + this.lastname1 + " 2º Apellido: " + this.lastname2 +
    " Fecha Nacimiento: " + this.born + " Foto: " + this.picture;
};

/* Objeto Category */
function Category(name,description){
	//Comprobamos si la funcion se invoca con el operador new
	if (!(this instanceof Category))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	name = typeof name !== 'undefined' ? name : "";
	if (name === "") throw new EmptyValueException("name");
	description = typeof description !== 'undefined' ? description : "";

	//Atributos privados del objeto
	var _name = name;
	var _description = description;

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			_name = value;
		}		
	});

	Object.defineProperty(this, 'description', {
		get:function(){
			return _description;
		},
		set:function(value){
			_description = value;
		}		
	});
}
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function(){
	return "Nombre: " + this.name + " Descripcion: " + this.description;
}

/* Objeto Resource */

function Resource(duration,link,audios,subtitles){
	//Comprobamos si la funcion se invoca con el operador new
	if (!(this instanceof Resource))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	duration = typeof duration !== 'undefined' ? duration : 0;
	if (duration === 0) throw new EmptyValueException("duration");
	link = typeof link !== 'undefined' ? link : "";
	if (link === "") throw new EmptyValueException("link");
	audios = typeof audios !== 'undefined' ? audios : "";
	subtitles = typeof subtitles !== 'undefined' ? subtitles : "";

	//Atributos privados del objeto
	var _duration = duration;
	var _link = link;
	var _audios = audios;
	var _subtitles = subtitles;

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'duration', {
		get:function(){
			return _duration;
		},
		set:function(value){
			_duration = value;
		}		
	});

	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			_link = value;
		}		
	});

	Object.defineProperty(this, 'audios', {
		get:function(){
			return _audios;
		},
		set:function(value){
			_audios = value;
		}		
	});

	Object.defineProperty(this, 'subtitles', {
		get:function(){
			return _subtitles;
		},
		set:function(value){
			_subtitles = value;
		}		
	});
}
Resource.prototype = {};
Resource.prototype.constructor = Resource;
//Terminar
Resource.prototype.toString = function(){

}

/* Objeto Abstracto Production */
function Production(title,nationality,publication,synopsis,image){
	//Comprobamos si la funcion se invoca con el operador new
	if (!(this instanceof Production))
		throw new InvalidAccessConstructorException();

	//Validación de parámetros obligatorios
	title = typeof title !== 'undefined' ? title : "";
	if (title === "") throw new EmptyValueException("title");
	publication = typeof publication !== 'undefined' ? publication : "";
	if (publication === "") throw new EmptyValueException("publication");
	nationality = typeof nationality !== 'undefined' ? nationality : "";
	synopsis = typeof synopsis !== 'undefined' ? synopsis : "";
	image = typeof image !== 'undefined' ? image : "";

	//Atributos privados del objeto
	var _title = title;
	var _nationality = nationality;
	var _publication = publication;
	var _synopsis = synopsis;
	var _image = image;

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			_title = value;
		}		
	});

	Object.defineProperty(this, 'nationality', {
		get:function(){
			return _nationality;
		},
		set:function(value){
			_nationality = value;
		}		
	});

	Object.defineProperty(this, 'publication', {
		get:function(){
			return _publication;
		},
		set:function(value){
			_publication = value;
		}		
	});

	Object.defineProperty(this, 'synopsis', {
		get:function(){
			return _synopsis;
		},
		set:function(value){
			_synopsis = value;
		}		
	});

	Object.defineProperty(this, 'image', {
		get:function(){
			return _image;
		},
		set:function(value){
			_image = value;
		}		
	});
}
Production.prototype = {};
Production.prototype.constructor = Resource;
Production.prototype.toString = function(){
	return "Titulo: " + this.title + "Nacionalidad: " + this.nationality + "Fecha Publicacion: " + this.publication
	+ "Synopsis: " + this.synopsis + "Imagen: " + this.image;
}

/* Objeto Movie que hereda de Production*/
function Movie(){
	//Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
	Production.call(this,title,nationality,publication,synopsis,image);
}
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;

/* Objeto Serie que hereda de Production*/
function Serie(){
	//Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
	Production.call(this,title,nationality,publication,synopsis,image);
}
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;

/* Objeto Season */
function Season(){

}

/* Objeto User */
function User(username,email,password){
	//Comprobamos si la funcion se invoca con el operador new
	if (!(this instanceof User))
		throw new InvalidAccessConstructorException();
	
	username = username.trim();
	email = email.trim();

	//Validación de parámetros obligatorios
	if (username === 'undefined' || username === '') throw new EmptyValueException("username");
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (username) !== true)
		throw new InvalidValueException("username", username);		

	if (email === 'undefined' || email === '') throw new EmptyValueException("email");	
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test (email) !== true)
		throw new InvalidValueException("email", email);

	password = typeof password !== 'undefined' ? password : "";
	if (password === "") throw new EmptyValueException("password");
	

    //Atributos privados del objeto
    var _username = username;
    var _email = email;
    var _password = password;

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, 'username', {
		get:function(){
			return _username;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("username");
			if (/^[a-z][a-z0-9_\-]*(\.[a-z0-9_\-]*)*[a-z0-9]$/.test (value) !== true)
				throw new InvalidValueException("username", value);		
			_username = value;
		}		
	});		

	Object.defineProperty(this, 'email', {
		get:function(){
			return _email;
		},
		set:function(value){
			if (value === 'undefined' || value === '') throw new EmptyValueException("email");	
			if (/^[a-z][a-z0-9_\-]*(\.[a-z0-9_\-]*)*[a-z0-9]\@[a-z0-9]+\.[a-z]{2,3}$/.test (value) !== true)
				throw new InvalidValueException("email", value);		
			_email = value;
		}		
	});	

    Object.defineProperty(this, 'password', {
		get:function(){
			return _password;
		},
		set:function(value){
			_password = value;
		}		
    });
}
User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function(){
    return "Usuario: " + this.username + "(" + this.email + ")" + "Contraseña: " + this.password;
};

/* Objeto Coordinate */
function Coordinate(latitude, longitude){
	//La función se invoca con el operador new
	if (!(this instanceof Coordinate)) 
		throw new InvalidAccessConstructorException();

	latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
	if (Number.isNaN(latitude)  || latitude < -90 || latitude > 90) 
		throw new InvalidValueException("latitude", latitude);
	longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
	if (Number.isNaN(longitude)  || longitude < -180 || longitude > 180) 
		throw new InvalidValueException("longitude", longitude);

	var _latitude = latitude;
	var _longitude = longitude;

	Object.defineProperty(this, 'latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -90 || value > 90) 
				throw new InvalidValueException("latitude", value);
			_latitude = value;
		}		
	});		

	Object.defineProperty(this, 'longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
			if (Number.isNaN(value)  || value < -180 || value > 180) 
				throw new InvalidValueException("latitude", value);
			_longitude = value;
		}		
	});		

}
Coords.prototype = {};
Coords.prototype.constructor = Coords;
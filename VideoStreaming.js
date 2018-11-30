"use strict"

/* Objeto Person*/
function Person(name,lastname1,lastname2,born,picture){
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
    return "Nombre: " + this.name + "1er Apellido: " + this.lastname1 + "2º Apellido: " + this.lastname2 +
    "Fecha Nacimiento: " + this.born + "Foto: " + this.picture;
};
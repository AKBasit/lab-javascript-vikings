// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        let newHealth = this.health - this.damage // I am stuck on this
    }
}

// Viking
class Viking {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
       if(this.health > 0) {
        return `${Viking.name} has received ${Viking.strength} points of damage` // I am stuck on this
       } 
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        if(Saxon.health > 0) {
            return "A Saxon has received DAMAGE points of damage" // I am stuck on this
        }
        else{
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {}

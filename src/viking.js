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
      this.health -= damage;  0
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        
    }

    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        const result = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        this.saxonArmy = [...this.saxonArmy].filter(sax => sax.health > 0)
        return result
    }

    saxonAttack() {
        const result = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        this.vikingArmy = [...this.vikingArmy].filter(vik => vik.health > 0)
        return result
    }

    showStatus() {
        if(this.saxonArmy.length === 0) return `${this.vikingArmy.length} Vikings have won the war of the century!`
        else if (this.vikingArmy.length === 0) return `${this.saxonArmy.length} Saxons have fought for their lives and survived another day...`
        else return `${this.vikingArmy.length} Vikings and ${this.saxonArmy.length} Saxons are still in the thick of battle.`
    }


}



const war = new War()

let n = 0;
const rand = Math.floor(Math.random() * 9)+1;

while (n < rand) {
    n++;
    war.addViking(new Viking("Halbrand "+n, Math.floor(Math.random() * 9)+10, Math.floor(Math.random() * 9)+3));
  
}

n = 0;

while (n < rand) {
    n++;
    war.addSaxon(new Saxon(Math.floor(Math.random() * 9)+10, Math.floor(Math.random() * 9)+3))
  
}

console.log(war.vikingArmy, war.saxonArmy)

do {
    console.log(war.vikingAttack())
    console.log(war.saxonAttack())
    console.log(war.showStatus())
    console.log()
} while (war.saxonArmy.length > 0 && war.vikingArmy.length > 0)


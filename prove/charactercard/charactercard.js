const creature = {
    health: 100,
    level: 5,
    takeDamage: function(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            alert("Character died!");
        }
        document.getElementById("health").textContent = `Health: ${this.health}`;
    },
    levelUp: function() {
        this.level += 1;
        document.getElementById("level").textContent = `Level: ${this.level}`;
    }
};

document.getElementById("attack").addEventListener("click", function() {
    creature.takeDamage(20);
});

document.getElementById("level_up").addEventListener("click", function() {
    creature.levelUp();
});
function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 250,
      currentRound: 0,
      whoWon: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.whoWon = "draw";
      } else if (value <= 0) {
        this.whoWon = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.whoWon = "draw";
      } else if (value <= 0) {
        this.whoWon = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth / 2.5 + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    isSpecialAvailable() {
      return this.currentRound % 5 !== 0;
    },
    isHealAvailable() {
      return this.currentRound % 8 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 250;
      this.whoWon = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      const attackDamage = getRandomValue(15, 5);
      this.monsterHealth -= attackDamage;
      this.addLogMessage("player", "attack", attackDamage);
      this.attackPlayer();
      this.currentRound++;
    },
    specialAttack() {
      const attackDamage = getRandomValue(75, 0);
      this.monsterHealth -= attackDamage;
      this.addLogMessage("player", "attack", attackDamage);
      this.attackPlayer();
      this.currentRound++;
    },
    attackPlayer() {
      const attackDamage = getRandomValue(15, 0);
      this.playerHealth -= attackDamage;
      this.addLogMessage("monster", "attack", attackDamage);
    },
    healPlayer() {
      const healAmount = getRandomValue(25, 10);
      if (this.playerHealth + healAmount > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healAmount;
      }
      this.addLogMessage("player", "heal", healAmount);
      this.attackPlayer();
      this.currentRound++;
    },
    surrender() {
      this.whoWon = "surrender";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");

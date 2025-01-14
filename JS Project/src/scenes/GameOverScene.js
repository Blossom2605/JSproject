import Phaser from "phaser";
import Config from "../Config";
import Button from "../ui/Button";
import { getTimeString } from "../utils/time";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    // 데이터를 전달받기 위해 init 메서드를 사용해줍니다.
    init(data) {
        // 받아온 데이터를 멤버 변수로 저장해줍니다.
        this.m_mobsKilled = data.mobsKilled;
        this.m_level = data.level;
        this.m_secondElapsed = data.secondElapsed;
    }

    create() {
        const GameOver_img = this.add.image(0, 0, "GameSet").setScale(0.295);
        GameOver_img.setOrigin(0, 0);

        this.add.bitmapText(
            Config.width / 2,
            Config.height / 2 - 180,
            "pixelFont",
            "You Lose...",
            80
        ).setOrigin(0.5);

        // 플레이 시간을 표시해줍니다.
        this.add
            .bitmapText(
                Config.width / 2,
                Config.height / 2 - 30,
                "pixelFont",
                `You survived for ${getTimeString(this.m_secondElapsed)} !`,
                40
            )
            .setOrigin(0.5);

        // 잡은 몹 수와 레벨을 표시해줍니다.
        this.add
            .bitmapText(
                Config.width / 2,
                Config.height / 2 + 30,
                "pixelFont",
                `Mobs Killed : ${this.m_mobsKilled}, Level : ${this.m_level}`,
                40
            )
            .setOrigin(0.5);

        // 메인 화면으로 이동하는 버튼을 추가해줍니다.
        new Button(
            Config.width / 2,
            Config.height / 2 + 180,
            "gameover",
            this,
            () => this.scene.start("mainScene"),
            0.77
        );
    }
}
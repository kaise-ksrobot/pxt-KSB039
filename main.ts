/**
 * KSB039 V0.010
 */
//% weight=10 color=#00A6F0 icon="\uf085" block="KSB039"
namespace KSB039 {

    let neoStrip: neopixel.Strip;


    /**
    * P1
    */
    //% blockId=KSB039_Mic
    //% block="Mic"
    //% weight=100
    export function Mic(): number {

        return pins.analogReadPin(AnalogPin.P1);
    }

    /**
    * P2
    */
    //% blockId=KSB039_Slider
    //% block="Slider"
    //% weight=99
    export function Slider(): number {

        return pins.analogReadPin(AnalogPin.P2);;
    }


    /**
    * P13
    */
    //% blockId=KSB039_Ultrasonic
    //% block="Ultrasonic(cm)"
    //% weight=98
    export function Ultrasonic(): number {

        let maxCmDistance = 500
        // send pulse
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P13, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P13, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P13, 0);

        const d = pins.pulseIn(DigitalPin.P13, PulseValue.High, maxCmDistance * 58);
        // read pulse

        return Math.idiv(d, 58);
    }

    

    /**
    * P16
    */
    //% blockId="KSB039_RGB1" 
    //% block="RGB LED1"
    //% weight=96
    export function RGB_LED1(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(0, 1);
    }
    /**
    * P16
    */
    //% blockId="KSB039_RGB2" 
    //% block="RGB LED2"
    //% weight=95
    export function RGB_LED2(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(1, 1);
    }
    /**
    * P16
    */
    //% blockId="KSB039_RGB3" 
    //% block="RGB LED3"
    //% weight=94
    export function RGB_LED3(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(2, 1);
    }
    /**
    * P16
    */
    //% blockId="KSB039_RGB4" 
    //% block="RGB LED4"
    //% weight=93
    export function RGB_LED4(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip.range(3, 1);
    }
    /**
    * P16
    */
    //% blockId="KSB039_RGB" 
    //% block="RGB LED Setting"
    //% weight=92
    export function RGB_LED(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip;
    }



}
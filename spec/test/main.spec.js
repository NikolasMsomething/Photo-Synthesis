import readline from "readline/promises";
import main from "../../index.js";
import { correct, error, warning } from "../../util/chalkColors.js";

describe('main', () => {
  beforeAll(() => {
    spyOn(process, 'exit');
    spyOn(console, 'log');
    spyOn(console, 'warn');
  })

  describe('Incorrect Input Validations', () => {
    it('logs correct error if user input is empty', async () => {
      spyOn(readline, 'createInterface').and.returnValue({
        write: () => undefined,
        question: (_message, cb) => {
          return ''
        },
        close: () => undefined,
      })

      await main();
      expect(console.log).toHaveBeenCalledWith(error('Error: Invalid input. Expected a non null input ... Please try again!'))
    });

    it('logs correct error if user input is a string', async () => {
      spyOn(readline, 'createInterface').and.returnValue({
        write: () => undefined,
        question: (_message, cb) => {
          return 'Test'
        },
        close: () => undefined,
      })

      await main();
      expect(console.log).toHaveBeenCalledWith(error('Error: Invalid input. Expected a valid number input ... Please try again!'))
    });

    it('exits node process if user input is "exit"', async () => {
      spyOn(readline, 'createInterface').and.returnValue({
        write: () => undefined,
        question: (_message, cb) => {
          return 'exit'
        },
      })

      await main();
      expect(process.exit).toHaveBeenCalledWith(0);
    });

    it('logs correct error if user input is out of available album range', async () => {
      spyOn(readline, 'createInterface').and.returnValue({
        write: () => undefined,
        question: (_message, cb) => {
          return '1000'
        },
        close: () => undefined
      })

      await main();
      expect(console.log).toHaveBeenCalledWith(error('Error: Enter an album in the available albums range (1 - 100) ... Please try again!'));
    });
  })

  describe('Correct Inputs', () => {
    beforeEach(() => {
      spyOn(readline, 'createInterface').and.returnValue({
        write: () => undefined,
        question: (_message, cb) => {
          return [3]
        },
        close: () => undefined
      });
    });

    it('logs records in the chosen album', async () => {
      const mockArr = [
        {
          "albumId": 3,
          "id": 101,
          "title": "incidunt alias vel enim",
          "url": "https://via.placeholder.com/600/e743b",
          "thumbnailUrl": "https://via.placeholder.com/150/e743b"
        },
      ]

      spyOn(global, 'fetch').and.returnValue(Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockArr)
      }));

      await main();
      expect(console.log).toHaveBeenCalledWith(correct('[101] incidunt alias vel enim'));
    });

    it('warns that there are no records in the chosen album', async () => {
      const mockArr = [];

      spyOn(global, 'fetch').and.returnValue(Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockArr)
      }));

      await main();
      expect(console.warn).toHaveBeenCalledWith(warning('The album you chose has no records!'));
    });
  })
});
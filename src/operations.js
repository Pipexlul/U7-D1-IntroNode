import fs from "fs";
import fsProm from "fs/promises";

import { checkValidParams, objectifyAppointmentParams } from "./paramUtils";

const RegisterAppointment = {
  aliases: ["register", "registrar"],
  run: async (args, metadata) => {
    if (checkValidParams(args, { allNotNull: true })) {
      console.error(
        "No todos los parámetros son validos. No ingrese campos vacios."
      );
      process.exit(1);
    }

    const [animalName] = args;

    console.log(`Adding a new appointment for ${animalName}`);
    const objToAppend = objectifyAppointmentParams(args);

    if (metadata && metadata.usePromises) {
      try {
        const curData = await fsProm.readFile(
          "../data/appointments.json",
          "utf8"
        );
        const jsonData = JSON.parse(curData);

        jsonData.push(objToAppend);

        const newJsonData = JSON.stringify(jsonData, null, 2);
        await fsProm.writeFile(
          "../data/appointments.json",
          newJsonData,
          "utf8"
        );

        console.log("Successfully added a new appointment.");
      } catch (err) {
        console.error(`No se pudo agregar al nuevo paciente ${animalName}`);
        console.error(err);
        process.exit(1);
      }
    } else {
      const curData = fs.readFileSync("../data/appointments.json", "utf8");
      const jsonData = JSON.parse(curData);

      jsonData.push(objToAppend);

      const newJsonData = JSON.stringify(jsonData, null, 2);
      fs.writeFileSync("../data/appointments.json", newJsonData, "utf8");

      console.log("Successfully added a new appointment.");
    }
  },
};

export default OperationsData = [RegisterAppointment];

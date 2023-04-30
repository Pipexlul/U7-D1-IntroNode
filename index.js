import Ops from "./src/operations.js";

const main = () => {
  const argList = process.argv.slice(2);

  const cmdName = argList[0];
  const cmdArgs = argList.slice(1);

  if (!cmdName) {
    console.log("Por favor ingrese un comando");
    process.exit(1);
  }

  const cmd = Ops.find((cmd) =>
    cmd.aliases.some((alias) => alias === cmdName.toLowerCase())
  );

  if (!cmd) {
    console.log("No se encontró el comando especificado");
    process.exit(1);
  }

  const reqArgs = cmd.requiredArgs;
  if (reqArgs.length > cmdArgs.length) {
    console.log(`Faltan argumentos para ejecutar el comando ${cmdName}`);
    process.exit(1);
  }

  // Change usePromises to true, to run commands using promises API
  cmd.run(cmdArgs, { usePromises: false });
};

main();

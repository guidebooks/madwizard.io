import type { Registrar } from "@kui-shell/core"

export default function registerCommands(registrar: Registrar) {
  registrar.listen("/ray-submit", () => "ray job submitted")
}

import {
  Command,
  CommandLineInputs,
  CommandLineOptions,
  CommandMetadata
} from '@ionic/cli-utils';

/**
 * Metadata about the compile command
 */
@CommandMetadata({
  name: 'compile',
  description: 'compile'
})
export class CompileCommand extends Command {
  async run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void> {
    this.env.log.msg('compile');
  }
}

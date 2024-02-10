import {deployConfig} from './deployConfig.js';
import process from 'process';
import path from 'path';
import {exec} from 'child_process';

const {user, server, location, buildFolder = 'dist'} = deployConfig;

if (!user || !server || !location) {
    console.error('== Missing config variables! Config supplied:');
    console.error(deployConfig);
    process.exit(1);
}

const deployFrom = path.resolve(path.dirname(process.argv[1]), buildFolder)

// Yes, yes, unsanitized data in `exec()`, I'm going to burn in infosec hell.
exec(`rsync -vrz --checksum --delete ${deployFrom}/ ${user}@${server}:${location}`, (error, stdout, stderr) => {
    if (error) {
        console.error('== Deploy failed.');
        console.error(stderr);
        process.exit(1)
    }

    console.log('== Deploy successful. Rsync said:')
    console.log(stdout);
})

//

# This script is used to flatten all the rust code in the subdirectories of the rust directory
# into a single file. This is useful for the rust course where the code is split into multiple
# directories for each lesson. This script will read all the rust code from the subdirectories
# and write it into a single file. This file can then be used to run the code in the rust
# playground.
import re
from os import walk, listdir
from pathlib import Path

def reader(path):
    assert path.is_dir() and path.exists() and path.name == 'rust', f'Invalid path: {path}'

    dirs = [path / d for d in listdir(path) if re.match(r'^\d{2}', d)]
    dirs = sorted(dirs)
    
    result = ''

    for d in dirs:
        this_path = d / 'src' / 'main.rs'
        if this_path.exists():
            with open(this_path, 'r') as f:
                result += f'//{this_path}\n{f.read()}\n\n'
    
    return result


def main(path = Path(__file__).parent):
    print(reader(path))
    

if __name__ == '__main__':
    main()
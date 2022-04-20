#!/bin/bash
git remote set-url origin git@github.com:KeshiKiD03/$(pwd | sed 's,^\(.*/\)\?\([^/]*\),\2,').git

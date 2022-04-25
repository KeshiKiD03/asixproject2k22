#!/bin/bash
git config --global --add safe.directory /media/sf_ASIX/ASIX_2K21/Documents/$(pwd | sed 's,^\(.*/\)\?\([^/]*\),\2,')

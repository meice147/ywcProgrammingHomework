import { Pipe, PipeTransform } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Pipe({
  name: 'searchQuery'
})
export class SearchQueryPipe implements PipeTransform {

  concatName(firstName, lastName) {
    return firstName.replace(/\u200b/g, '') + ' ' + lastName.replace(/\u200b/g, '');
  }


  transform(value, queryString: string) {
    queryString = queryString.toLowerCase();
    if ((queryString.split(' ').length - 1) > 1 || queryString === ' ') {
      return null;
    } else if (!queryString) {
      return value.sort(function (a, b) {
        return ((a['interviewRef'] < b['interviewRef']) ? -1 :
          ((a['interviewRef'] > b['interviewRef']) ? 1 : 0));
      });
    }
    return value.sort(function (a, b) {
      return ((a['interviewRef'] < b['interviewRef']) ? -1 :
        ((a['interviewRef'] > b['interviewRef']) ? 1 : 0));
    }).filter(data =>
      this.concatName(data.firstName, data.lastName).indexOf(queryString) !== -1
      || data.interviewRef.trim().toLowerCase().indexOf(queryString) !== -1
      || data.major.toLowerCase().trim().indexOf(queryString) !== -1
      || data.firstName.trim().replace(/\u200b/g, '').indexOf(queryString) !== -1
      || data.lastName.trim().replace(/\u200b/g, '').indexOf(queryString) !== -1);
  }

}

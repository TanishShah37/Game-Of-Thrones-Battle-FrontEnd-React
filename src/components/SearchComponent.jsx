/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setBackendBattleData,
  onChange,
  setAutoCompleteSuggestions,
} from '../actions/searchbar'
import { retrieveAndsetBattleData } from '../actions/battlecards'
import Autosuggest from 'react-autosuggest'

class SearchComponent extends Component {
  async componentDidMount () {
    this.props.setBackendBattleData('locationid')
    this.props.setBackendBattleData('battlenameid')
    this.props.setBackendBattleData('regionid')
  }

  getAutoCompleteSuggestions = (value, id) => {
    const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (escapedValue === '') return []

    const regex = new RegExp(escapedValue, 'i')
    this.props.setAutoCompleteSuggestions(
      this.props[id].backenddata.filter(location => regex.test(location)),
      id,
    )
  }

  onChange = (event, { newValue, method }) => {
    this.props.onChange(newValue, event.target.id)
  }

  onSubmitBattleData = event => {
    event.preventDefault()
    const querydata = {
      location: event.target.locationid.value,
      region: event.target.regionid.value,
      year: event.target.yearid.value,
      name: event.target.battlenameid.value,
    }
    const queryparams = Object.keys(querydata)
    // eslint-disable-next-line
      .map(key => {
        if (querydata[key])
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            querydata[key],
          )}`
      })
      .filter(item => item)
      .join('&')
    this.props.retrieveAndsetBattleData(queryparams)
  }

  render () {
    return (
      <form
        className='card shadow-sm d-flex flex-column needs-validation'
        onSubmit={this.onSubmitBattleData}
      >
        <div className='mt-3 d-flex row no-gutters mx-md-5 mx-2 flex-wrap justify-content-center'>
          <div className='form-group col-md mx-2 '>
            <Autosuggest
              suggestions={this.props.locationid.suggestion}
              onSuggestionsFetchRequested={({ event, value }) => {
                this.getAutoCompleteSuggestions(value, 'locationid')
              }}
              onSuggestionsClearRequested={() => {
                this.props.setAutoCompleteSuggestions([], 'locationid')
              }}
              getSuggestionValue={suggestion => suggestion}
              renderSuggestion={suggestion => (
                <div id='locationid' className='p-2'>
                  {suggestion}
                </div>
              )}
              inputProps={{
                placeholder: 'Location',
                id: 'locationid',
                value: this.props.locationid.value,
                className: 'form-control',
                onChange: this.onChange,
              }}
            />
          </div>
          <div className='form-group col-md mx-2 '>
            <Autosuggest
              suggestions={this.props.battlenameid.suggestion}
              onSuggestionsFetchRequested={({ event, value }) => {
                this.getAutoCompleteSuggestions(value, 'battlenameid')
              }}
              onSuggestionsClearRequested={() => {
                this.props.setAutoCompleteSuggestions([], 'battlenameid')
              }}
              getSuggestionValue={suggestion => suggestion}
              renderSuggestion={suggestion => (
                <div id='battlenameid' className='p-2'>
                  {suggestion}
                </div>
              )}
              inputProps={{
                placeholder: 'Battle Name',
                id: 'battlenameid',
                value: this.props.battlenameid.value,
                className: 'form-control',
                onChange: this.onChange,
              }}
            />
          </div>
          <div className='form-group col-md mx-2 '>
            <input
              type='number'
              className='form-control'
              id='yearid'
              placeholder='Year'
            />
          </div>
          <div className='form-group col-md mx-2 '>
            <Autosuggest
              suggestions={this.props.regionid.suggestion}
              onSuggestionsFetchRequested={({ event, value }) => {
                this.getAutoCompleteSuggestions(value, 'regionid')
              }}
              onSuggestionsClearRequested={() => {
                this.props.setAutoCompleteSuggestions([], 'regionid')
              }}
              getSuggestionValue={suggestion => suggestion}
              renderSuggestion={suggestion => (
                <div id='regionid' className='p-2'>
                  {suggestion}
                </div>
              )}
              inputProps={{
                placeholder: 'Region',
                id: 'regionid',
                value: this.props.regionid.value,
                className: 'form-control',
                onChange: this.onChange,
              }}
            />
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className=' btn btn-primary btn-sm w-25 mb-3'>Search</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  locationid: state.searchbar.locationid,
  battlenameid: state.searchbar.battlenameid,
  regionid: state.searchbar.regionid,
})

export default connect(mapStateToProps, {
  setBackendBattleData,
  onChange,
  setAutoCompleteSuggestions,
  retrieveAndsetBattleData,
})(SearchComponent)
